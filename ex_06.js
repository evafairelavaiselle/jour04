addresses = [
    ["45 avenue des tulipes", "92130 Issy-les-Moulineaux"],
    ["95 avenue parmentier", "75011 Paris"],
    ["24 Rue Pasteur", "92400 Courbevoie"],
    ["Champ de Mars, 5 Av. Anatole France", "75007 Paris"],
    ["Pl. Louis-Armand", "75571 Paris"]
  ];

  function findAddresses(toFind) {
    addresses.forEach((ok) => {
      if (ok[0].search(toFind) != -1 || ok[1].search(toFind) != -1) {
                  console.log(ok[0]+","+ok[1])
      }
    });
  }

  findAddresses("Paris")