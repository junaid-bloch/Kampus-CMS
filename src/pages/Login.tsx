
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from '@/components/auth/LoginForm';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
  const [activeTab, setActiveTab] = useState('student');
  const navigate = useNavigate();

  // Mock login function
  const handleLoginSubmit = (data: { email: string; password: string; remember: boolean }) => {
    console.log('Login attempt:', data);
    
    // Mock successful login
    localStorage.setItem('user', JSON.stringify({
      id: '1',
      name: 'John Doe',
      email: data.email,
      role: activeTab === 'admin' ? 'admin' : activeTab === 'faculty' ? 'faculty' : 'student'
    }));
    
    // Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-campus-light to-white p-4">
      <div className="w-full max-w-md animate-fade-in">
        <Button 
          variant="ghost" 
          className="mb-4" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-campus-primary mb-2">Campus Flow</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-campus-primary">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Select your role and enter your credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                <LoginForm onSubmit={handleLoginSubmit} userType="student" />
              </TabsContent>
              <TabsContent value="faculty">
                <LoginForm onSubmit={handleLoginSubmit} userType="faculty" />
              </TabsContent>
              <TabsContent value="admin">
                <LoginForm onSubmit={handleLoginSubmit} userType="admin" />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-sm text-center text-gray-500">
              <span>Forgot your password? </span>
              <a href="#" className="text-campus-secondary hover:text-campus-primary">Reset it here</a>
            </div>
          </CardFooter>
        </Card>
      </div>
      
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>© 2025 Campus Flow Management System</p>
      </footer>
    </div>
  );
};

export default Login;
