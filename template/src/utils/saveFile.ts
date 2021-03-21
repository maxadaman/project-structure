export const downloadAttachment = (link: string, filename: string): void => {
  fetch(link).then(function (t) {
    return t.blob().then((blob: Blob) => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.setAttribute('download', filename);
      a.click();
      a.remove();
    });
  });
};
