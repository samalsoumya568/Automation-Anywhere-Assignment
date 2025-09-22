import testData from '../fixtures/API.json';

describe('Use Case 3: Learning Instance API Flow', () => {
  let authToken;
  let instanceId;

  before(() => {
    cy.request({
      method: 'POST',
      url: 'https://community.cloud.automationanywhere.digital/v2/authentication',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: testData.username1,
        password: testData.password1
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      authToken = res.body.token;
    });
  });

  it('should validate learning instance availability API', () => {
    cy.request({
      method: 'GET',
      url: 'https://community.cloud.automationanywhere.digital/cognitive/v3/learninginstances/checkavailability/',
      headers: { Authorization: `Bearer ${authToken}` },
      timeout: 10000
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.duration).to.be.lessThan(2000);
      expect(res.body).to.have.property('available');
      expect(res.body.available).to.be.true;
    });
  });

  it('should create a learning instance', () => {
    cy.request({
      method: 'POST',
      url: 'https://community.cloud.automationanywhere.digital/cognitive/v3/learninginstances',
      headers: { Authorization: `Bearer ${authToken}` },
      body: {
        name: 'AutomationLearningInstance',
        type: 'AI Model'
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.duration).to.be.lessThan(3000);
      expect(res.body).to.have.all.keys('id', 'name', 'status', 'createdAt');
      expect(res.body.name).to.eq('AutomationLearningInstance');
      expect(res.body.status).to.eq('created');
      instanceId = res.body.id;
    });
  });

  it('should validate learning instance details', () => {
    cy.request({
      method: 'GET',
      url: `https://community.cloud.automationanywhere.digital/cognitive/v3/learninginstances/${instanceId}`,
      headers: { Authorization: `Bearer ${authToken}` }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('id', instanceId);
      expect(res.body).to.have.property('name', 'AutomationLearningInstance');
      expect(res.body).to.have.property('status').and.to.be.oneOf(['created', 'active']);
    });
  });
});
