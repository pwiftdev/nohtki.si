export async function uploadImages(files: File[]) {
  const uploadPromises = files.map(async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed to upload ${file.name}`);
    }

    const data = await response.json();
    return data.url;
  });

  return Promise.all(uploadPromises);
} 