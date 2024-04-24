const students = [
    { name: "alex", age: 20 },
    { name: "mike", age: 24 },
    { name: "masha", age: 20 },
    { name: "stas", age: 18 },
  ];
  
  const groupAll = (count) => {
      const group = {};
  
      count.forEach(e => {
          if (group[e.age]) {
              group[e.age].push(e);
          } else {
              group[e.age] = [e];
          }
      });
      return group;
  };

  const studentsCount = Object.entries(groupAll(students));
  console.log("Группы студентов:", studentsCount);


