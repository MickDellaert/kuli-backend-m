// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: "cloudinary",
//       providerOptions: {
//         cloud_name: env("CLOUDINARY_NAME"),
//         api_key: env("CLOUDINARY_KEY"),
//         api_secret: env("CLOUDINARY_SECRET"),
//       },
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   // ...
//   upload: {
//     config: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: 'doz3koti5',
//         api_key: '518415748592659',
//         api_secret: 'NXG3KRY3y97yiDOH_Qyp57NHz2w',
//       },
//       actionOptions: {
//         upload: {},
//         uploadStream: {},
//         delete: {},
//       },
//     },
//   },
//   // ...
// });




module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dmh5irags',
        api_key: '714788118913714',
        api_secret: 'rL6tdJ_T2SC147z3LSV-k37vL1M',
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});