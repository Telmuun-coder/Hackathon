export default class Utils {
    static checkUser(props) {
      if (props.me.user_id > 0) {
        switch (props.me.user_type_id) {
          case 1:
            if (props.match.url !== "/admin/customers") {
              window.location = "/admin/customers";
            }
            break;
          case 2:
            if (props.match.url !== "/manager/surgalt/surgaltiinMedeelel") {
              window.location = "/manager/surgalt/surgaltiinMedeelel";
            }
            break;
          case 3:
            if (props.match.url !== "/ys-zui/hariutslaga-Tootsoh-humuus") {
              window.location = "/ys-zui/hariutslaga-Tootsoh-humuus";
            }
            break;
          case 4:
            if (props.match.url !== "/organization") {
              window.location = "/organization";
            }
            break;
          case 5:
            if (props.match.url !== "/gishuun-bus-toloolol/huvi-hunii-medeelel") {
              window.location = "/gishuun-bus-toloolol/huvi-hunii-medeelel";
            }
            break;
          case 6:
            if (props.match.url !== "/customer/courses") {
              window.location = "/customer/courses";
            }
            break;
          case 7:
            if (props.match.url !== "/admin/profile") {
              window.location = "/admin/profile";
            }
            break;
        }
      } else if (props.match.url !== '/public'){
        window.location = "/public";
      }
    }
    static showSpinner() {
      window.document.body.className += ' loading';
    }
    static hideSpinner() {
      window.document.body.className = window.document.body.className.replace(' loading', '');
    }
    static toggleMenu(e) {
      e.preventDefault();
      if (window.document.body.className.indexOf(' show-menu') < 0) {
        window.document.body.className += ' show-menu';
      } else {
        window.document.body.className = window.document.body.className.replace(' show-menu', '');
      }
    }
    static toDate(isoString) {
      return isoString ? isoString.substring(0, 10).replace(/\-/g, '.') : isoString;
    }
    static toDateTime(isoString) {
      return isoString ? isoString.substring(0, 16).replace(/\-/g, '.').replace('T', ' ') : isoString;
    }
    static toIsoString(date) {
      return new Date(date).toISOString().split(".")[0] + "Z";
    }
    static now() {
      return new Date().toISOString().split(".")[0] + "Z";
    }
    static addressJsonToString(address) {
      return address && address.length > 0 ? this.addressToString(JSON.parse(address)) : address;
    }
    static addressToString(address) {
      var result = '';
      if (address) {
        if (address.city && address.city.name && address.city.name.length > 0) {
          result += address.city.name;
        }
        if (address.district && address.district.name && address.district.name.length > 0) {
          result += ', ' + address.district.name
        }
        if (address.khoroo && address.khoroo.name && address.khoroo.name.length > 0) {
          result += ', ' + address.khoroo.name
        }
        if (address.street && address.street.length > 0) {
          result += ', ' + address.street
        }
        if (address.building && address.building.length > 0) {
          result += ', ' + address.building
        }
        if (address.door && address.door.length > 0) {
          result += ', ' + address.door
        }
        if (address.other && address.other.length > 0) {
          result += ', ' + address.other
        }
      }
      return result;
    }
    static handleError(err) {
      Utils.hideSpinner();
      if ((err = "Failed to fetch")) {
        this.setState({ error: "Сервисээс мэдээллээ авч чадсангүй" });
      } else {
        this.setState({ error: err });
      }
      return err;
    }
    static getTinyMCEConfig() {
      return {
        plugins: [
          "advlist autolink lists link image charmap print preview hr anchor",
          "searchreplace wordcount visualblocks visualchars code fullscreen",
          "insertdatetime media nonbreaking save table contextmenu directionality",
          "emoticons template paste textcolor"
        ],
        toolbar: "insertfile undo redo | styleselect | fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons",
        height: 400,
        paste_data_images: true
      };
    }
    static firstLetter(value) {
      return (typeof value === 'string' || value instanceof String) ? value.substr(0, 1) : '';
    }
  }
  