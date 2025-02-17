function preventScroll() {
    document
        .querySelector('#form-toggler')
        .focus({preventScroll:true});
}

document
    .querySelector('[for=form-toggler]')
    .addEventListener('click', preventScroll);