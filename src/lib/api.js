const axios = require('axios');

async function makePostRequest() {
    let res = await axios.post('https://mportal.cau.ac.kr/portlet/p017/p017.ajax', {
        tabNo : 1
    });

    console.log(`Status code: ${res.status}`);
    console.log(`Status text: ${res.statusText}`);
    console.log(`Request method: ${res.request.method}`);
    console.log(`Path: ${res.request.path}`);

    console.log(`Date: ${res.headers.date}`);
    // console.log(`Data: ${res.data}`);

    console.log(`Data: ${res.data.gridData[0].roomName}`);
}

makePostRequest();


// import axios from 'axios'

// Vue.prototype.$http = axios

// // export const getPost = id => axios.get(`link`);

// axios.post('https://mportal.cau.ac.kr/portlet/p017/p017.ajax', {
//     // user: 'velopert',
//     // message: 'hi'
// })
// .then( response => { console.log(response) } )
// .catch( response => { console.log(response) } );

// const axios = require('axios');

// const getLibrary = () => {
//   try {
//     return axios.get('https://mportal.cau.ac.kr/portlet/p017/p017.ajax');
//   } catch (error) {
//     console.error(error)
//   }
// };

// const printRoomInfo = () => {
//     const roomInfo = getLibrary()
//         .then(response => {
//             if (response.data.)
//         })
// }

// // const countBreeds = () => {
// //   const breeds = getBreeds()
// //   	.then(response => {
// //       if (response.data.message) {
// //         console.log(`현재 강아지의 수는 ${Object.entries(breeds.data.message).length}입니다.`);
// //       }
// //   	})
// //   	.catch(error => {
// //       console.log(error);
// //   	})
// // };

// // countBreeds();