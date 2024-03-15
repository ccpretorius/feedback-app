import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  // SOMEHOW acync await is not working here, but .then.catch is
  // const fetchFeedback = async () => {
  //   const response = await fetch("http://localhost:5001/feedback?_sort=id&_order=desc");
  //   console.log(response); // Log the raw response
  //   const data = await response.json();
  //   console.log(data); // Log the fetched data

  //   setFeedback(data);
  //   console.log(data); // Log the fetched data
  // };
  // Simplified fetch feedback without async
  const fetchFeedback = () => {
    fetch("http://localhost:5001/feedback")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setFeedback(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)));
  };

  // Set itme to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback, //could be just feedback
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
