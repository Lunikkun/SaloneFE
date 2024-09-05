interface ErrorRegistration {
    success: boolean;
    error: {
      issues: Issue[];
      name: string;
    };
  } 