

exports.index = async (req, res) => {
    try {
        res.render('index', { status: 'Okay' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}