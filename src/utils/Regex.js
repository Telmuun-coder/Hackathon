export default class Regex {
    static krill = {
      initialValue: "",
      rules: [
        {
          pattern: "^[^\\w\\d:]{2,}$",
          message: "Кирилл үсгээр үнэн зөв бичнэ үү"
        },
        {
          required: true,
          message: "Оруулна уу?"
        }
      ]
    };
    static register = {
      initialValue: "",
      rules: [
        {
          pattern: "^[^\\w\\d\\s:]{2}\\d{8}$",
          message: "Та регистрийн дугаараа зөв оруулна уу!"
        },
        {
          required: true,
          message: "Регистрийн дугаараа оруулна уу!"
        }
      ]
    };
    static phone = {
      initialValue: "",
      rules: [
        {
          pattern: "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]{7,}$",
          message: "Форматын дагуу бичнэ үү: 00000000"
        },
        {
          required: true,
          message: "Утасны дугаараа бичнэ үү?"
        }
      ]
    };
    static number = {
      initialValue: "",
      rules: [
        {
          pattern: "^[0-9]+$",
          message: "Зөвхөн тоо оруулна уу"
        },
        {
          required: true,
          message: "Бичнэ үү?"
        }
      ]
    };
    static diplomNumber = {
      initialValue: "",
      rules: [
        {
          pattern: "^[^\\w\\d\\s:]{2}\\d{8}$",
          message: "Та дипломны дугаараа зөв оруулна уу!"
        },
        {
          required: true,
          message: "Дипломны дугаараа оруулна уу!"
        }
      ]
    };
    static gpi = {
      initialValue: "",
      rules: [
        {
          pattern: "[0-9]",
          message: "Голч оноогоо оруулна уу"
        },
        {
          required: true,
          message: "Бичнэ үү?"
        }
      ]
    };
  }
  