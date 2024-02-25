let ApiData = [
    {
      id: 1,
      text: "This is the first comment",
      user: "Alice",
      timestamp: "2024-02-25 10:00:00",
      replies: [
        {
          id: 4,
          text: "Replying to the first comment",
          user: "Bob",
          timestamp: "2024-02-25 10:05:00",
          replies: [
            {
              id: 7,
              text: "Nested reply to the first comment",
              user: "Charlie",
              timestamp: "2024-02-25 10:07:00",
              replies: [],
            },
          ],
        },
      ],
      starred: true,
    },
    {
      id: 2,
      text: "Another comment here",
      user: "Charlie",
      timestamp: "2024-02-25 10:10:00",
      replies: [
        {
          id: 5,
          text: "Replying to the second comment",
          user: "Dave",
          timestamp: "2024-02-25 10:15:00",
          replies: [],
        },
        {
          id: 6,
          text: "Another reply to the second comment",
          user: "Eve",
          timestamp: "2024-02-25 10:20:00",
          replies: [
            {
              id: 8,
              text: "Nested reply to the second comment",
              user: "Frank",
              timestamp: "2024-02-25 10:22:00",
              replies: [],
            },
          ],
        },
        {
          id: 9,
          text: "Second-level reply to the second comment",
          user: "Grace",
          timestamp: "2024-02-25 10:30:00",
          replies: [
            {
              id: 10,
              text: "Nested reply to the second-level reply",
              user: "Henry",
              timestamp: "2024-02-25 10:35:00",
              replies: [],
            },
          ],
        },
      ],
      starred: false,
    },
    {
      id: 3,
      text: "Third comment example",
      user: "Frank",
      timestamp: "2024-02-25 10:25:00",
      replies: [],
      starred: false,
    },
    {
      id: 11,
      text: "Another comment",
      user: "Iris",
      timestamp: "2024-02-25 10:40:00",
      replies: [
        {
          id: 12,
          text: "First-level reply to the fourth comment",
          user: "John",
          timestamp: "2024-02-25 10:45:00",
          replies: [
            {
              id: 13,
              text: "Nested reply to the first-level reply",
              user: "Kate",
              timestamp: "2024-02-25 10:50:00",
              replies: [],
            },
          ],
        },
        {
          id: 14,
          text: "Another first-level reply to the fourth comment",
          user: "Lucy",
          timestamp: "2024-02-25 10:55:00",
          replies: [],
        },
      ],
      starred: false,
    },
  ];

export default ApiData;
