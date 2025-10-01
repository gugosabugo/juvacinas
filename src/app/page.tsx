import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShieldIcon from '@mui/icons-material/Shield';
import GroupsIcon from '@mui/icons-material/Groups';
import ScienceIcon from '@mui/icons-material/Science';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';

interface CampaignCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  buttonText: string;
  buttonHref: string;
  status?: string; // opcional
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  title,
  description,
  image,
  alt,
  buttonText,
  buttonHref,
  status
}) => (
  <Card sx={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: 6
    }
  }}>
    <CardMedia
      component="img"
      height="200"
      image={image}
      alt={alt}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          {title}
        </Typography>
        {status && (
          <Chip label={status} color="success" size="small" />
        )}
      </Box>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions sx={{ p: 2, pt: 0 }}>
      <Button variant="contained" fullWidth href={buttonHref}>
        {buttonText}
      </Button>
    </CardActions>
  </Card>
);

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, color }) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      height: '100%',
      transition: 'all 0.3s',
      borderTop: `4px solid ${color}`,
      '&:hover': {
        elevation: 6,
        transform: 'translateY(-4px)'
      }
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{
        bgcolor: `${color}15`,
        borderRadius: '50%',
        p: 1.5,
        mr: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {icon}
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color }}>
        {title}
      </Typography>
    </Box>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

export default function Home() {
  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1976d2 100%)',
          color: 'white',
          py: 8,
          px: { xs: 2, md: 6 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.4
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            💉 Vacinas Salvam Vidas
          </Typography>

          <Typography
            variant="h5"
            align="center"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              mb: 4,
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              opacity: 0.95
            }}
          >
            Proteja você e sua família. Descubra tudo sobre vacinas, campanhas de imunização e como elas funcionam para manter nossa comunidade saudável!
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              href="/campanhas"
              sx={{
                bgcolor: 'white',
                color: '#1976d2',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  bgcolor: '#f0f0f0'
                }
              }}
            >
              Ver Campanhas Ativas
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/vacinas"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Conhecer Vacinas
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Info Cards Section */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <InfoCard
              icon={<ShieldIcon sx={{ fontSize: 40, color: '#1976d2' }} />}
              title="Proteção Eficaz"
              description="As vacinas previnem doenças graves e salvam milhões de vidas todos os anos em todo o mundo."
              color="#1976d2"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <InfoCard
              icon={<GroupsIcon sx={{ fontSize: 40, color: '#2e7d32' }} />}
              title="Imunidade Coletiva"
              description="Quando mais pessoas se vacinam, toda a comunidade fica protegida, incluindo quem não pode se vacinar."
              color="#2e7d32"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <InfoCard
              icon={<ScienceIcon sx={{ fontSize: 40, color: '#ed6c02' }} />}
              title="Ciência Comprovada"
              description="Décadas de pesquisa e bilhões de doses aplicadas comprovam a segurança e eficácia das vacinas."
              color="#ed6c02"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <InfoCard
              icon={<CheckCircleIcon sx={{ fontSize: 40, color: '#9c27b0' }} />}
              title="Gratuitas no SUS"
              description="O Brasil oferece mais de 20 vacinas gratuitamente pelo Sistema Único de Saúde para todas as idades."
              color="#9c27b0"
            />
          </Grid>
        </Grid>

        {/* Campanhas Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#1976d2', mb: 4 }}
          >
            Campanhas de Vacinação 2025
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <CampaignCard
                title="Influenza"
                description="Proteja-se contra a gripe. Vacinação disponível para públicos prioritários e grupos de risco. Campanha anual essencial."
                image="https://www.icc.fiocruz.br/wp-content/uploads/2023/09/vacina.jpg"
                alt="Vacina contra Influenza"
                buttonText="Saiba Mais"
                buttonHref="/campanhas"
                status="Ativa"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <CampaignCard
                title="Covid-19"
                description="Vacinação essencial para evitar formas graves da doença. Doses de reforço disponíveis. Confira locais e horários."
                image="https://www.pmvc.ba.gov.br/wp-content/uploads/S%C3%ADmbolo-covid-19-6882296_1280.jpg"
                alt="Vacina contra Covid-19"
                buttonText="Saiba Mais"
                buttonHref="/campanhas"
                status="Ativa"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <CampaignCard
                title="Sarampo"
                description="Vacinação contra sarampo para crianças e adultos não imunizados. Fundamental para evitar surtos e complicações graves."
                image="https://oleak.com.br/wp-content/uploads/2025/03/iStock-2152300024-e1743016835795.jpg"
                alt="Vacina contra Sarampo"
                buttonText="Saiba Mais"
                buttonHref="/campanhas"
                status="Permanente"
              />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Como Funcionam Section */}
        <Paper
          elevation={3}
          sx={{
            p: 5,
            bgcolor: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
            borderRadius: 3
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#1565c0', mb: 3 }}
          >
            🔬 Como as Vacinas Funcionam?
          </Typography>

          <Typography variant="h6" paragraph sx={{ color: '#424242', lineHeight: 1.8 }}>
            As vacinas são uma das maiores conquistas da medicina moderna. Elas estimulam o sistema imunológico a reconhecer e combater agentes infecciosos, como vírus e bactérias, sem causar a doença.
          </Typography>

          <Typography variant="h6" paragraph sx={{ color: '#424242', lineHeight: 1.8 }}>
            Quando você se vacina, seu corpo aprende a se defender. É como um treino para o sistema imunológico: ele conhece o &quot;inimigo&quot; em um ambiente controlado e seguro, criando &quot;memória imunológica&quot; que dura anos ou até a vida toda.
          </Typography>

          <Box sx={{ bgcolor: 'white', p: 3, borderRadius: 2, my: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              📋 Do que são feitas as Vacinas?
            </Typography>

            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              As vacinas podem conter diferentes componentes, dependendo do tipo:
            </Typography>

            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body1" paragraph>
                <strong>Vírus ou bactérias inativados:</strong> Versões &quot;mortas&quot; do patógeno que não podem causar doença, mas ensinam o corpo a se defender.
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                <strong>Fragmentos do patógeno:</strong> Pedaços de proteínas ou açúcares que são suficientes para gerar resposta imune.
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                <strong>Vacinas de mRNA:</strong> Tecnologia moderna que instrui as células a produzir proteínas específicas, treinando o sistema imune.
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                <strong>Vetores virais:</strong> Vírus modificados que transportam material genético do patógeno de forma segura.
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                <strong>Adjuvantes:</strong> Substâncias que aumentam a resposta imunológica, tornando a vacina mais eficaz.
              </Typography>
            </Box>
          </Box>

          <Paper elevation={0} sx={{ bgcolor: '#fff3e0', p: 3, borderLeft: '4px solid #ff9800' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#e65100' }}>
              ⚡ Por que vacinar é importante?
            </Typography>
            <Typography variant="body1">
              Cada tipo de vacina é desenvolvido para gerar imunidade de forma segura e eficaz. A vacinação não protege apenas você, mas também pessoas ao seu redor que podem ter o sistema imune fragilizado, como bebês, idosos e pessoas com doenças crônicas.
            </Typography>
          </Paper>
        </Paper>

        {/* Benefícios Section */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 4 }}
          >
            Benefícios da Vacinação
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', bgcolor: '#e8f5e9' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                  ✅ Para Você
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" variant="body1" paragraph>
                    Previne doenças graves e complicações
                  </Typography>
                  <Typography component="li" variant="body1" paragraph>
                    Reduz hospitalizações e gastos com saúde
                  </Typography>
                  <Typography component="li" variant="body1" paragraph>
                    Proteção duradoura contra infecções
                  </Typography>
                  <Typography component="li" variant="body1" paragraph>
                    Segurança comprovada cientificamente
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', bgcolor: '#e1f5fe' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#0277bd' }}>
                  🌍 Para a Comunidade
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" variant="body1" paragraph>
                    Cria imunidade coletiva
                  </Typography>
                  <Typography component="li" variant="body1" paragraph>
                    Protege quem não pode se vacinar
                  </Typography>
                  <Typography component="li" variant="body1" paragraph>
                    Elimina doenças (como a varíola)
                  </Typography>
                  <Typography component="li" variant="body1" paragraph>
                    Reduz surtos e epidemias
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Missão Section */}
        <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
          <Paper
            elevation={4}
            sx={{
              p: 5,
              maxWidth: 700,
              mx: 'auto',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white'
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              🎯 Nossa Missão
            </Typography>
            <Typography variant="h6" sx={{ lineHeight: 1.8, opacity: 0.95 }}>
              Promover o acesso à informação de qualidade para aumentar a cobertura vacinal, combater a desinformação e proteger a saúde coletiva através da ciência e educação.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}