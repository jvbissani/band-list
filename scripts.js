    members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {}
        }
    },
    methods: {
        addMember: function() {
            if (this.newMember.fname && this.newMember.lname && this.newMember.instrument) {
                const isDuplicate = this.members.some(member => 
                    member.fname === this.newMember.fname &&
                    member.lname === this.newMember.lname 
                );
    
                if (!isDuplicate) {
                    this.members.push(this.newMember);
                    this.newMember = {};
                } else {
                    alert("This member has already been added.");
                    this.newMember = {};
                }
            } else {
                alert("All fields must be filled.");
            }
        },
        clearList: function() {
            this.members = [];
        }
    }    
    }


Vue.createApp(handlingForms).mount('#app');
