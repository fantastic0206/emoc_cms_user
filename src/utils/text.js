export const checkEmptyRichText = (content) => {
  return (
    !content ||
    content === '<p></p>' ||
    content === '<p><br></p>'
  );
}