import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const ProjectDiag = () => {
  const [fileData, setFileData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Получение данных о файлах
    axios.get('/api/files/{userId}')
      .then((response) => {
        const files = response.data.content;
        const users = {};

        files.forEach((file) => {
          const userId = file.user.id;
          users[userId] = (users[userId] || 0) + 1;
        });

        setFileData(users);
      })
      .catch((error) => {
        console.error(error);
      });

    // Получение данных о пользователях
    axios.get('/api/users')
      .then((response) => {
        const users = response.data;
        const today = new Date();
        const ages = users.map((user) => {
          const birthdate = new Date(user.birthdate);
          let age = today.getFullYear() - birthdate.getFullYear();
          const monthDiff = today.getMonth() - birthdate.getMonth();
          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
          }
          return age;
        });

        const ageCounts = {};
        ages.forEach((age) => {
          const interval = Math.floor(age / 10) * 10;
          ageCounts[interval] = (ageCounts[interval] || 0) + 1;
        });

        setUserData(ageCounts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Распределение файлов по пользователям</h2>
      <Plot
        data={[
          {
            x: Object.keys(fileData),
            y: Object.values(fileData),
            type: 'bar',
          },
        ]}
        layout={{
          title: 'Распределение файлов по пользователям',
          xaxis: { title: 'Пользователи' },
          yaxis: { title: 'Количество файлов' },
        }}
      />

      <h2>Возрастное распределение пользователей</h2>
      <Plot
        data={[
          {
            x: Object.keys(userData),
            y: Object.values(userData),
            type: 'bar',
          },
        ]}
        layout={{
          title: 'Возрастное распределение пользователей',
          xaxis: { title: 'Возрастные интервалы' },
          yaxis: { title: 'Количество пользователей' },
        }}
      />
    </div>
  );
};

export default ProjectDiag;
