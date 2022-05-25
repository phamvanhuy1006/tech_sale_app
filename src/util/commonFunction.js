export const avatarName = (username) => {
  return (
    "https://firebasestorage.googleapis.com/v0/b/techapp-ad995.appspot.com/o/image%2Favatar" +
    username +
    "?alt=media&token=5f3f6cd9-f0a9-4502-b0de-a88a7f867c24"
  );
};

export const formatDate = (date) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  date = dd + "/" + mm + "/" + yyyy;

  return date;
};
