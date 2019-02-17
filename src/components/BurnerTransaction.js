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
        <div style={{ width: '100%', margin: '30px 0 0 0'}}>
            <hr style={{ border: '1.5px solid #fff'}} />
            <div style={{textAlign: 'center', marginBottom: '15px'}}>
                <h2 style={{ color: '#fff'}}>{companyName}</h2>
            </div>
            <div style={{ display: 'flex',}}>
                <div style={{ flex: '0 0 200px'}}>
                    <img
                        src={companyLogoUrl || ''}
                        style={{ width: '100%', maxWidth: '200px' }}
                        alt={companyName}
                    />
                </div>
                <div style={{marginLeft: '20px', flex: '1 1 100%'}}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <div style={{ fontWeight: 'bold', textTransform: 'uppercase'}}>
                                Order Number
                            </div>
                            <div>
                                {companyTxId}
                            </div>
                        </div>
                        <div style={{ paddingLeft: '20px'}}>
                            <div style={{ fontWeight: 'bold', textTransform: 'uppercase'}}>
                                Date
                            </div>
                            <div>
                            {formatDate(transactionDateTime)}
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '15px', fontSize: '30px', display: 'flex',}}>
                        <div style={{ fontWeight: 'bold', textTransform: 'uppercase', paddingRight: '20px'}}>
                            Total
                        </div>
                        <div>
                            {formatCurrency(total)}
                        </div>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        {children}
                    </div>
                </div>
            </div>
            <hr style={{ border: '1.5px solid #fff'}} />
        </div>
    );
}
