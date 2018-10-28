import React, { Component } from "react";
import "./Style/App.css";
import Events from "./Components/Events.js";
import Form from "./Components/Admin/Admin-form.js";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin.js";
import AdminEvents from "./Components/Admin/Admin_events.js";

class App extends Component {
    state = { events: [] };

    componentDidMount() {
        fetch("/events")
            .then(res => res.json())
            .then(data => {
                this.setState({ events: data });
            });
    }

    toDelete(id) {
        console.log("toDelete");
        fetch("/events/" + id, {
            method: "delete"
        }).then(response => {
            if (response.status === 500) {
                alert("Error: Failed to delete event");
            } else {
                window.location.reload();
            }
        });
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route
                            exact
                            path="/events"
                            render={() => <Events events={this.state.events} />}
                        />
                        <Route path="/event/:id" component={Events} />
                        <Route exact path="/admin" component={Admin} />
                        <Route path="/admin/events/add" component={Form} />
                        <Route
                            exact
                            path="/admin/events"
                            render={() => (
                                <AdminEvents
                                    events={this.state.events}
                                    deleteEvent={this.toDelete}
                                />
                            )}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
