import Service from "../services/Service";

export default class PublicUserService extends Service {
  constructor() {
    super("public", "user");
  }

  login(email, password) {
    return super
      .add("token", {
        email: email,
        password: password
      })
      .then(result => result.json())
      .then(result => {
        if (result.status === "success") {
          this.setToken(result.result.accessToken);
          return result;
        } else {
          return false;
        }
      });
  }
}
