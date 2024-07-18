import React, { useEffect, useState } from 'react';
import styles from '@/styles/NewsSelector.module.css';

const NewsSelector = ({ articles, selectedArticles, setSelectedArticles }) => {

    useEffect(() => {
        setSelectedArticles(articles);

    }, [articles]);

    const handleCheckboxChange = (url, isChecked) => {


        // Check if the article is already selected
        const isAlreadySelected = selectedArticles.some(article => article.link === url);

        if (isChecked && !isAlreadySelected) {
            // If the checkbox is checked and the article isn't already selected, add it
            setSelectedArticles(
                selectedArticles.concat(articles.find(article => article.link === url) || [])
            )

        } else if (!isChecked && isAlreadySelected) {
            // If the checkbox is unchecked and the article is selected, remove it
            const updatedSelectedArticles = selectedArticles.filter(article => article.link !== url);
            setSelectedArticles(updatedSelectedArticles);

        }
    };


    return (
        <>
            <table className={styles.questionTable}>
                <thead>
                    <tr>
                        <th >Total: {articles.length}
                        </th>
                        <th>
                            Selected: {selectedArticles.length} </th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, index) => (
                        <tr key={article.link + index}>
                            <td className={styles.checkbox}>
                                <input
                                    type="checkbox"
                                    name={'article_' + index}
                                    id={'article_' + index}
                                    defaultChecked={selectedArticles[article.link] || true}
                                    // handleCheckboxChange = (url, isChecked)
                                    onChange={(e) => handleCheckboxChange(article.link, e.target.checked)}
                                />
                            </td>
                            <td>
                                <label htmlFor={'article_' + index}>
                                    {article.title}
                                </label>
                            </td>

                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={2} > Selected: {selectedArticles.length} </th>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};

export default NewsSelector;