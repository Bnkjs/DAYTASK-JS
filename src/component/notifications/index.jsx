import { Notyf } from 'notyf';
import React from 'react';
import 'notyf/notyf.min.css';

export const NotyfSuccessTask = () => {
  const notyf = new Notyf();
  notyf.success({
    message: 'La tâche à été créé 🥳 🎉 ',
    position: {
      x: 'right',
      y: 'top',
    },
    duration: 3000,
    icon: false,
  });
};

export const NotyfErrorTask = () => {
  const notyf = new Notyf();
  notyf.error({
    message: '⚠️Remplir tous les champs ⚠️',
    position: {
      x: 'right',
      y: 'top',
    },
    duration: 3000,
    icon: false,
  });
};

export const NotyfDeleteTask = () => {
  const notyf = new Notyf();
  notyf.error({
    message: '🧹 Tâche supprimée 💨',
    background: 'orange',
    position: {
      x: 'right',
      y: 'top',
    },
    duration: 3000,
    icon: false,
  });
};

