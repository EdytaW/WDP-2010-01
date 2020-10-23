import PropTypes from 'prop-types';
import React from 'react';

import Feedback from '../../common/Feedback/Feedback';

import styles from './ClientFeedback.module.scss';

class ClientFeedback extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { feedbacks } = this.props;
    const { activePage } = this.state;

    const currentFeedbackProps = feedbacks[activePage];
    const pagesCount = Math.ceil(feedbacks.length);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col '}></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {feedbacks.length ? (
              <Feedback {...currentFeedbackProps} />
            ) : (
              <div className={styles.noComent}>There is no client feedbacks</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ClientFeedback.propTypes = {
  children: PropTypes.node.isRequired,
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
    })
  ),
};

ClientFeedback.defaultProps = {
  feedback: [],
};

export default ClientFeedback;
