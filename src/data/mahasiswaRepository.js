const axios = require("axios");

class MahasiswaRepository {
  async getAllData() {
    try {
      const response = await axios.get(
        "http://registrasi.digitalevent.id/api/mahasiswa-registrasi"
      );

      const mahasiswaData = response.data.data;

      // console.log(mahasiswaData);
      return mahasiswaData;
    } catch (error) {
      console.error("Error fetching Mahasiswa data", error);
      throw error;
    }
  }
}

module.exports = new MahasiswaRepository();
