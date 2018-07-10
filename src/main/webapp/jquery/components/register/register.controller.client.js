(function () {
    $(main)

    var $usernameFld, $passwordFld, $confirmPasswordFld
    var $createBtn
    var userService = new UserService()

    function main() {
        $usernameFld = $('#usernameFld'), $passwordFld = $('#passwordFld'), $confirmPasswordFld = $('#confirmPasswordFld')
        $createBtn = $('#createBtn')
        $createBtn.click(createAccount)
    }

    function createAccount() {
        samePassword()
    }

    function register() { 

        var userObj = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
        }

        userService.register(userObj).then(console.log('hello there'))
    }

    function validUsername() {

        userService.validUsername($usernameFld.val()).then(function(isValid) {
            if (!isValid) {
                alert('Username is already taken.  Please pick a new username.')
            } else {
                register()
            }
        })
    }

    function samePassword() {

        if ($passwordFld.val() !== $confirmPasswordFld.val()) {
            alert('Passwords must be the same.')
        } else {
            validUsername()
        }
    }


})();