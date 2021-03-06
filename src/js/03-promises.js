import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const firstDelayEl = document.querySelector('[name="delay"]');
const nextDelayEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

// console.log(firstDelayEl);

// ================================
// один проміс

// formEl.addEventListener('submit', createPromise);

// function createPromise(position, delay) {
//   const promise = new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     }, delay);
//   });
//   return promise;
// }
// createPromise(2, 1500)
//   .then(mes => {
//     console.log(mes);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//
// ===========================================================================

formEl.addEventListener('submit', onBtnCreatePromiseEClick);

function onBtnCreatePromiseEClick(event, position, delay) {
  event.preventDefault();
  delay = Number(firstDelayEl.value);
  for (let i = 1; i <= amountEl.value; i += 1) {
    position = i;
    delay += Number(nextDelayEl.value);

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  event.currentTarget.reset();
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
