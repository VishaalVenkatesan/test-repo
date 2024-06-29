export async function fetchProjectData(projectId) {
  console.log(`Fetching project mapping for ProjectId: ${projectId}`);

  try {
    const response = await fetch(`https://asia-south1-neoperk-backend.cloudfunctions.net/UserDataFetcher?projectId=${projectId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      console.error(`Server responded with status: ${response.status} for ProjectId: ${projectId}`);
      const errorText = await response.text();
      console.error(`Error response: ${errorText}`);
      throw new Error(`Error fetching data for ProjectId: ${projectId}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch data for ProjectId: ${projectId}`, error);
    throw new Error(`Internal server error when fetching data for ProjectId: ${projectId}`);
  }
}