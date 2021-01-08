const decrypts = ({ crypto, algorithm, password, iv }) => {
  return function decrypt(encrypted) {
    try {
      let str = null;
      if (encrypted) {
        const decipher = crypto.createDecipheriv(algorithm, password, iv);
        const dec = decipher.update(encrypted, "hex", "utf8");
        str = dec;
      }
      if (!str) return encrypted;
      return str;
    } catch (e) {
      return encrypted;
    }
  };
};

module.exports = decrypts;
