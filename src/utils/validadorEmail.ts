export class ValidadorEmailAdapter{
    validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
}
