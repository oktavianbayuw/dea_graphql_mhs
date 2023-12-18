const MahasiswaRepository = require("../data/mahasiswaRepository");

const MahasiswaResolver = {
  Query: {
    allDataMahasiswa: async () => {
      try {
        console.log("Fetching Mahasiswa data...");
        const mahasiswaData = await MahasiswaRepository.getAllData();
        // console.log("Mahasiswa data:", mahasiswaData);
        return mahasiswaData.map((mahasiswa) => ({
          ...mahasiswa,
          registrasi: mahasiswa.reg_id
            ? {
                id: mahasiswa.reg_id,
                nik: mahasiswa.nik,
                status: mahasiswa.status,
              }
            : null,
        }));
      } catch (error) {
        console.error("Error fetching Mahasiswa data", error);
        throw error;
      }
    },
  },
};

module.exports = MahasiswaResolver;
