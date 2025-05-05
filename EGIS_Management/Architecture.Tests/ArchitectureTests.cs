using FluentAssertions;
using NetArchTest.Rules;
using Xunit;

namespace Architecture.Tests
{
    public class ArchitectureTests
    {
        private const string DomainNamespace = "Domain";
        private const string ApplicationNamespace = "Application";
        private const string InfrastructureNamespace = "Infrastructure";
        private const string PresentationNamespace = "Presentation";
        private const string WebApiNamespace = "TOIMS.API";

        [Fact]
        public void Domain_Should_Not_DependFromOtherClassLibraryProject()
        {
            // Arrange
            var assembly = typeof(Domain.AssemblyReference).Assembly;

            var otherProjects = new[]
            {
                ApplicationNamespace,
                InfrastructureNamespace,
                PresentationNamespace,
                WebApiNamespace
            };

            // Act
            var testResult = Types
                .InAssembly(assembly)
                .ShouldNot()
                .HaveDependencyOnAll(otherProjects)
                .GetResult();

            // Assert
            testResult.IsSuccessful.Should().BeTrue();
        }
    }
}
