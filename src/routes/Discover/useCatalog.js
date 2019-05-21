const React = require('react');

const useCatalog = () => {
    return React.useMemo(() => {
        return Array(2224).fill(null).map((_, index) => ({
            id: `tt${index}`,
            type: 'movie',
            name: 'Stremio demo item',
            posterShape: 'poster'
        }));
    }, []);
};

module.exports = useCatalog;