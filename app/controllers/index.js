import Ember from 'ember';

export default Ember.Controller.extend({
    headerMessage: 'Soon',
    responseMessage: '',
    emailAddress: '',
    // isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    // isDisabled: Ember.computed.not('isValid'),
    isDisabled: Ember.computed.empty('emailAddress'),
    actions: {
        saveInvitation() {
            //ES5
            //
            // var that = this;
            // var email = this.get('emailAddress');
            //
            // var newInvitation = this.store.createRecord('invitation', {
            //     email: email;
            // });
            //
            // newInvitation.save().then(function(response) {
            //     console.log(response);
            //     that.set('responseMessage', 'Saved');
            //     that.set('emailAddress', '');
            // });

            //ES6

            const email = this.get('emailAddress');
            const newInvitation = this.store.createRecord('invitation', {
                email: email
            });

            newInvitation.save().then((response) => {
                this.set('responseMessage', `Saved ${response.get('id')}`);
                this.set('emailAddress', '');
            });
        }
    }
});
