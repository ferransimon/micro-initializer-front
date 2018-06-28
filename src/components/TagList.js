import React, { Component } from 'react'
import Tag from '../components/Tag'

class TagList extends Component {
    render () {
        return (
            <div>
                {this.props.tags.map(u => {
                    return (
                        <Tag
                            key={u.id}
                            name={u.name}
                        />
                    );
                })}
            </div>
        );
    }
}

export default TagList;