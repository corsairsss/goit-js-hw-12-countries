
export default {
    duration: 5000,
    position: {
        x: 'center',
        y: 'top',
    },
    types: [
        {
            type: 'error',
            backgroundColor: 'red',
            duration: 2000,
            dismissible: true,
        },
        {

            type: 'info',
            backgroundColor: '#3f3e3e',
            icon: false,
            message: 'Too many matches found.Please enter a more specific query',
            dismissible: true,
            duration: 2500,

        },

    ],
}