import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  return Promise.allSettled([photo, user])
    .then((values) => {
      if (values[0].status !== 'fulfilled' || values[1].status !== 'fulfilled') {
        return { photo: null, user: null };
      }
      return { photo: values[0].value, user: values[1].value };
    });
}
