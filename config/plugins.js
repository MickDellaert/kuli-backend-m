module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'doz3koti5',
        api_key: '518415748592659',
        api_secret: 'NXG3KRY3y97yiDOH_Qyp57NHz2w',
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