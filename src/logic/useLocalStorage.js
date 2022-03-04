import React, { useState } from "react";

function useLocalStorage() {
  const [issues, setIssues] = useState(null);
  localStorage.setItem("Issues", issues);
}

export { useLocalStorage };
