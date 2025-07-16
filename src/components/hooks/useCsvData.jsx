import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const useCsvData = (csvUrl, parser, options = { header: false }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!csvUrl || !parser) return;

        setLoading(true);

        fetch(csvUrl)
            .then(res => res.text())
            .then(csvText => {
                const parsed = Papa.parse(csvText, {
                    ...options,
                    skipEmptyLines: true,
                });

                const rawRows = parsed.data;
                const parsedItems = rawRows.map((row, index) =>
                    options.header ? parser(row, index) : parser(Array.isArray(row) ? row : row.join(','), index)
                );

                setItems(parsedItems);
                setLoading(false);
            })
            .catch(err => {
                console.error('CSV fetch failed:', err);
                setLoading(false);
            });
    }, [csvUrl, parser, options.header]);

    return { items, loading };
};

export default useCsvData;
