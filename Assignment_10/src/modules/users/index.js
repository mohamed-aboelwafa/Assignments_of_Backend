const router =
require("express").Router();

const controller =
require("./user.controller");

router.post(
    "/signup",
    controller.signup
);

router.post(
    "/login",
    controller.login
);

router.patch(
    "/",
    controller.updateUser
);

router.delete(
    "/",
    controller.deleteUser
);

router.get(
    "/",
    controller.getUser
);

module.exports = router;