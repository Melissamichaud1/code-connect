import React, { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // Fetch stories
  const { isLoading, error, data } = useQuery("stories", () =>
    makeRequest.get("/stories").then((res) => res.data)
  );

  // Mutation for adding a story
  const addStoryMutation = useMutation(
    (formData) =>
      makeRequest.post("/stories/add", formData, {
        // Specify config to prevent adding createdAt field
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    {
      onSuccess: () => {
        // Invalidate and refetch stories data
        queryClient.invalidateQueries("stories");
      },
    }
  );

  // Handle delete story
  const handleDelete = async (storyId) => {
    await makeRequest.delete(`/stories/${storyId}`);
    // Invalidate and refetch stories data
    queryClient.invalidateQueries("stories");
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      // Append userId to FormData if needed
      formData.append("userId", currentUser.id);
      try {
        // Update the endpoint to reflect the correct path
        await addStoryMutation.mutate(formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.error("Error adding story:", error);
      }
    }
  };

  return (
    <div className="stories">
      <div className="add-story">
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label htmlFor="fileInput" className="add-story-button">
          Add Story
        </label>
      </div>
      {error && <p>Something went wrong</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data &&
        data.map((story) => (
          <div className="story" key={story.id}>
            <img src={`/upload/${story.img}`} alt="Story" />
            {currentUser.id === story.userId && (
              <button onClick={() => handleDelete(story.id)}>Delete</button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Stories;
