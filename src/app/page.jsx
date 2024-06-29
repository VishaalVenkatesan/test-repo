"use client"
import { fetchProjectData } from "./lib/fetch"
import { useEffect, useState } from "react";

const page = () => {
  const [projectData, setProjectData] = useState(null);
    useEffect(() => {
      fetchProjectData("FD00")
        .then((data) => {
          setProjectData(data);
    })
        .catch((error) => {
          console.error(error);
        });
    }, []);

  return (
    <div>
      <div>
              <div>
                <pre>{JSON.stringify(projectData, null, 2)}</pre>
              </div>
          </div>
    </div>
  )
}

export default page