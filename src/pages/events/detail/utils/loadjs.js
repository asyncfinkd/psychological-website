import loadjs from "loadjs";

export const loadjsUtils = () => {
  loadjs("/assets/js/custom.js", {
    success: function () {
      loadjs.done("bundle");
    },
    error: function () {
      loadjs("/assets/js/custom.js", {
        success: function () {
          loadjs.done("bundle");
        },
      });
    },
  });
  loadjs("/assets/css/templatemo-softy-pinko.css", {
    success: function () {
      loadjs.done("bundle");
    },
    error: function () {
      loadjs("/assets/css/templatemo-softy-pinko.css", {
        success: function () {
          loadjs.done("bundle");
        },
      });
    },
  });
  loadjs("/assets/css/bootstrap.min.css", {
    success: function () {
      loadjs.done("bundle");
    },
    error: function () {
      loadjs("/assets/css/bootstrap.min.css", {
        success: function () {
          loadjs.done("bundle");
        },
      });
    },
  });
  loadjs("/assets/css/flex-slider.css", {
    success: function () {
      loadjs.done("bundle");
    },
    error: function () {
      loadjs("/assets/css/flex-slider.css", {
        success: function () {
          loadjs.done("bundle");
        },
      });
    },
  });
  loadjs("/assets/css/font-awesome.css", {
    success: function () {
      loadjs.done("bundle");
    },
    error: function () {
      loadjs("/assets/css/font-awesome.css", {
        success: function () {
          loadjs.done("bundle");
        },
      });
    },
  });
};
