/*
    This is here where all the routes lives
 */

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Layout
import PageLayout from './layouts/PageLayout';

// Pages
import PageHome from './pages/Home';


class Routes extends Component {
    render() {
        return (
            <PageLayout>
                <Route exact={true} path="/" component={PageHome} />
            </PageLayout>
        )
    }
}

export default Routes;