import React from 'react';
import Link from 'next/link';

function Deposit() {
    return (
        <div className="sd1yyof">
            <div className="payment-list">
                <div className="top-list">
                    <img src="/images/1.95d2ce3e.png" alt="Payment Method 1" />
                    <img src="/images/2.9ecc809a.png" alt="Payment Method 2" />
                    <img src="/images/3.bff69b05.png" alt="Payment Method 3" />
                </div>
                <div className="bot-list">
                    <img src="/images/masterpay.9a38df7b.png" alt="MasterPay" />
                    <img src="/images/visapay.650bbcd1.png" alt="VisaPay" />
                </div>
            </div>
            <div className="payment-opt">
                <div className="payment-cont">
                    <div className="payment-title">Fast & Easy Way to Get Started</div>
                    <div className="payment-desc"><span>300%</span> Deposit Bonus</div>
                    <div className="btn-wrap">
                        <Link href="/payment" passHref>
                            <button className="ui-button button-normal s-conic2">
                                <div className="button-inner">Deposit</div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deposit;
