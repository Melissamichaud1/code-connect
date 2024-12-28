// export const updateUser = (req, res) => {
//   try {
//     // Access the files from the request
//     const cover = req.files.cover ? req.files.cover[0].filename : null;
//     const profile = req.files.profile ? req.files.profile[0].filename : null;

//     // Your logic to update the user's profile goes here
//     // For now, just sending back the file names to confirm the upload

//     res.status(200).send({
//       message: "Profile updated successfully",
//       cover: cover,
//       profile: profile,
//     });
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };
