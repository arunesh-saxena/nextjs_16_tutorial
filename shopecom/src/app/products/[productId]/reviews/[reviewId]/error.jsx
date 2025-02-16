'use client';

const ErrorBoundary = ({error}) => {
    return (
        <div>
            <h3>Error</h3>
            <p color="red">{error.message}.</p>
        </div>
    );
};

export default ErrorBoundary;