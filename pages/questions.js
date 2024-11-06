Promise.all([
    fetch('../utility/addInformation.json').then(response => response.json()),
    fetch('../utility/lifeStyle.json').then(response => response.json()),
    fetch('../utility/medicalNeeds.json').then(response => response.json()),
    fetch('../utility/personalPreferences.json').then(response => response.json())
  ])
    .then(([addInformation, lifeStyle, medicalNeeds, personalPreferences]) => {
      console.log(addInformation);
      console.log(lifeStyle);
      console.log(medicalNeeds);
      console.log(personalPreferences);
    })
    .catch(error => console.error("Erro ao carregar os arquivos JSON:", error));
  