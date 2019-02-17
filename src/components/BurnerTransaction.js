import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

function formatDate(date) {
    return moment(date).format('MMM Do, YYYY');
}

function formatCurrency(amount) {
    return numeral(amount).format('$0,0.00');
}

export default function BurnerTransaction({
    children,
    companyLogoUrl,
    companyName,
    companyTxId,
    transactionDateTime,
    total,
}) {
    return (
        <div style={{ width: '100%', display: 'flex',}}>
            <div>
                <img
                    src={companyLogoUrl || ''}
                    style={{ width: '100%', maxWidth: '200px' }}
                    alt={companyName}
                />
            </div>
            <div>
                <div>
                    Transaction Id: {companyTxId}
                </div>
                <div>
                    Date: {formatDate(transactionDateTime)}
                </div>
                <div>
                    Total: {formatCurrency(total)}
                </div>
                {children}
            </div>
        </div>
    );
}
